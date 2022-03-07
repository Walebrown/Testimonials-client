import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



 export const fetchPost = createAsyncThunk('posts/update', async () => {
    const {data} = await axios.get('http://localhost:5000/posts');
    console.log(data)
    return data; 

    
});

export const CreatePost = createAsyncThunk('posts/create', async (newPost) => {
    const {data} = await axios.post('http://localhost:5000/posts', newPost);
    console.log(data)
    return data;
});


export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
    
    pending: false,
    error: false,
    },


    reducers: {},
        extraReducers: {
            [fetchPost.pending]: (state) => {
                state.pending = true;
                state.error = false;
            },
            [fetchPost.fulfilled]: (state, action) => {
                state.posts = action.payload;
                state.pending = false;
               // state.posts.push(action.payload)

            },
            [fetchPost.rejected]: (state) => {
                state.pending = false;
                state.error = true;

            },
            [CreatePost.pending]: (state) => {
                state.pending = true;
                state.error = false;
            },
            [CreatePost.fulfilled]: (state, action) => {
                state.posts =  [...state.posts, action.payload];
                state.pending = false;
            

            },
            [CreatePost.rejected]: (state) => {
                state.pending = false;
                state.error = true;

            }

        }
    
        
    
});

//export const { fetchPost, createPost } = postSlice.action
export default postSlice.reducer