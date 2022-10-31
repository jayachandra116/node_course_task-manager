const request=require('supertest');
const app=require('../src/app');
const User=require('../src/models/user')
const {setUpDatabase,user1,userOneId}=require('./fixtures/db');

beforeEach(setUpDatabase)

test('Should sign up a new user',async ()=>{
    const res=await request(app).post('/users').send({
        name:'Andrew',
        email:'Andrew@example.com',
        password:'mYpass777'
    }).expect(201)

    //Assert that the databse is changed correctly
    const user=await User.findById(res.body.user._id)
    expect(user).not.toBeNull()

    //Assertions about the response
    expect(res.body).toMatchObject({
        user:{
            name:'Andrew',
            email:'andrew@example.com'
        },
        token:user.tokens[0].token
    })

    expect(user.password).not.toBe('MyPass777!')
})

test('Should login existing user',async()=>{
    const res=await request(app).post('/users/login').send({
        email:user1.email,
        password:user1.password
    }).expect(200)

    const user=await User.findById(userOneId)
    expect(res.body.token).toBe(user.tokens[1].token)


})

test('Should not login non existing user',async()=>{
 await request(app).post('/users/login').send({
        email:'asd',
        password:'asd'
    }).expect(400)
})

test('Should get profile for user',async()=>{
    await request(app)
        .get('/users/me')
        .set(
            'Authorization',`Bearer ${user1.tokens[0].token}`
        )
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user',async()=>{
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete account for user',async()=>{
    await request(app)
        .delete('/users/me')
        .set('Authorization',`Bearer ${user1.tokens[0].token}`)
        .send()
        .expect(200)
    
    const user=await User.findById(userOneId)
    expect(user).toBeNull()
})

test('Should not delete account for unauthenticated user',async()=>{
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

test('Should upload avatar upload',async()=>{
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization',`Bearer ${user1.tokens[0].token}`)
        .attach('avatar','tests/fixtures/profile-pic.jpg')
        .expect(200)
    
    const user=await User.findById(userOneId);
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user fields',async()=>{
    await request(app)
        .patch('/users/me')
        .set('Authorization',`Bearer ${user1.tokens[0].token}`)
        .send({
            name:'Jess'
        })
        .expect(200)

        const user=await User.findById(userOneId)
        expect(user.name).toEqual('Jess')
})

test('Should not update invalid user fields',async()=>{
    await request(app)
        .patch('/users/me')
        .set('Authorization',`Bearer ${user1.tokens[0].token}`)
        .send({
            location:'India'
        })
        .expect(400)
})