import React, { Component } from 'react';
import  PostItem from '../PostItem/PostItem';
import './PostList.css';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: 
                {
                    name: "Neto Veloso",
                    avatar: 'https://avatars1.githubusercontent.com/u/16401171?s=460&v=4'
                },
                date: "10 Out 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                {
                    id: 1,
                    author: 
                    {
                        name: "Diego Fernandes",
                        avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
                    },
                    content: "Sempre"
                }
                ]
            },
            {
                id: 2,
                author: 
                {
                  name: 'Vanessa Romero',
                  avatar: 'https://i.pravatar.cc/150?img=1'
                },
                date: '10 Out 2019',
                content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
                comments: [
                  {
                    id: 2,
                    author: 
                    {
                      name: 'Diego Fernandes',
                      avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
                    },
                    date: '12 Out 2019',
                    content:
                      'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
                  }
                ]
            },
            {
                id: 3,
                author: 
                {
                  name: 'Vanessa Romero',
                  avatar: 'https://i.pravatar.cc/150?img=1'
                },
                date: '14 Out 2019',
                content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
                comments: [
                  {
                    id: 2,
                    author: 
                    {
                      name: 'Diego Fernandes',
                      avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
                    },
                    date: '14 Out 2019',
                    content:
                      'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
                  }
                ]
            }
        ]
    };

    render(){
        const { posts } = this.state;
        return (
            <div className="postlist">
                {
                    posts.map(post => (
                        <PostItem key={post.id} {...post} />
                    ))
                }
             </div>
        );
    }
}

export default PostList;