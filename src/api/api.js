import React from 'react'
import axios from 'axios';
const api = axios.create({
    baseURL: 'http://zlaja.live:3006',
});
export const getFeedbacks = async () => {
    try {
        const { data } = await api.get('/feedbacks/');
        return data;
    } catch (error) { }
}

export const getFeedback = async (id) => {
    try {
        const { data } = await api.get(`/feedbacks/${id}`);
        return data;
    } catch (error) { }
}
export const createFeedback = async (body) => {
    try {
        const { data } = await api.post('/feedbacks/', { data: body });
        return data;
    } catch (error) { }
}

export const editFeedback = async (id, body) => {
    try {
        const { data } = await api.patch(`/feedbacks/${id}`, { data: body });
        return data;
    } catch (error) { }
}
export const deleteFeedback = async (id) => {
    try {
        const { data } = await api.delete(`/feedbacks/${id}`);
        return data;
    } catch (error) { }
}
export const upvoteFeedback = async (id) => {
    try {
        const { data } = await api.patch(`/feedbacks/${id}/upvote`);
        return data;
    } catch (error) { }
}
export const createComment = async (id, body) => {
    try {
        const { data } = await api.post(`/feedbacks/${id}/comments`, { data: body });
        return data;
    } catch (error) { }
}
export const createReply = async (id, comment, body) => {
    try {
        const { data } = await api.post(`/feedbacks/${id}comments/${comment}/reply`, { data: body });
        return data;
    } catch (error) { }
}