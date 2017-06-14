const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
    Todo.remove({}).then(() => done());
});

describe('POST/todos', () => {
    it('should create a new todo', (done) => {
        let text = 'Random value';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect(() => {
                expect(res.body.text).toBe(text);
            })
            .end((err, response) => {
                if(err){
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].length).toBe(text);
                    done();
                }).catch((e) => done(e));
            })
    })
})