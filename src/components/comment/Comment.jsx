import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineComment } from 'react-icons/ai';

const Comment = ({ comment, onLike, onUnlike, onDelete, onEdit, likedComments }) => {
    const isLiked = likedComments && likedComments.includes(comment.id);
    const [likes, setLikes] = useState(comment.likes);
    const [liked, setLiked] = useState(isLiked);
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(comment.text);

    const handleLike = () => {
        if (!liked) {
            onLike(comment.id);
            setLikes((prevLikes) => prevLikes + 1);
            setLiked(true);
        } else {
            onUnlike(comment.id);
            setLikes((prevLikes) => prevLikes - 1);
            setLiked(false);
        }
    };

    const handleDelete = () => {
        onDelete(comment.id);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        if (editedText.trim() !== '') {
            onEdit(comment.id, editedText);
            setIsEditing(false);
        }
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedText(comment.text);
    };

    const handleChange = (event) => {
        setEditedText(event.target.value);
    };

    return (
        <div className="comment">
            <div className="comment-header">
                <AiOutlineUser className="user" />
                <p className="comment-author">{comment.name}</p>
            </div>
            {isEditing ? (
                <textarea
                    value={editedText}
                    onChange={handleChange}
                    className="comment-edit-input"
                    rows={4}
                />
            ) : (
                <div className='comment-edit'>
                    <p className="comment-text">{comment.text}</p>
                    {!isEditing && (
                        <button className="comment-delete" onClick={handleDelete}>
                            Yorumu sil
                        </button>
                    )}
                </div>
            )}
            <div className="comment-actions">
                <button className="comment-like" onClick={handleLike}>
                    Yorumu bəyən
                    <span className="like-count">{likes}</span>
                </button>
            </div>
        </div>
    );
};

const CommentList = ({ comments, onLike, onUnlike, onDelete, onEdit }) => {
    return (
        <div className="comment-list">
            {comments.map((comment, index) => (
                <Comment
                    key={index}
                    comment={comment}
                    onLike={onLike}
                    onUnlike={onUnlike}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
};

const CommentForm = ({ onComment }) => {
    const [text, setText] = useState('');

    const handleComment = () => {
        if (text.trim() !== '') {
            onComment(text);
            setText('');
        }
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleComment();
        }
    };

    return (
        <div className="comment-form">
            <textarea
                value={text}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Yorumunuzu qeyd edin"
                className="comment-input"
                rows={4}
            />
            <button type="button" onClick={handleComment} className="comment-button">
                Göndər
            </button>
        </div>
    )
}

const GetComment = () => {
    const [comments, setComments] = useState([]);

    const handleUnlike = (commentId) => {
        const updatedComments = comments.map((comment) => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    likes: comment.likes - 1,
                };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    const handleComment = (text) => {
        const newComment = {
            id: comments.length + 1,
            name: 'Azar Ahmadov',
            text: text,
            likes: 0,
            replies: [],
        };
        setComments([...comments, newComment]);
    };

    const handleLike = (commentId) => {
        const updatedComments = comments.map((comment) => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    likes: comment.likes + 1,
                };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    const handleDelete = (commentId) => {
        const updatedComments = comments.filter(
            (comment) => comment.id !== commentId
        );
        setComments(updatedComments);
    };

    const handleEdit = (commentId, editedText) => {
        const updatedComments = comments.map((comment) => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    text: editedText,
                };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    return (
        <div className="app">
            <h1 className="app-title">
                Yorumlar
                <AiOutlineComment />
            </h1>
            <CommentList
                comments={comments}
                onLike={handleLike}
                onUnlike={handleUnlike}
                onDelete={handleDelete}
            />
            <CommentForm onComment={handleComment} />
        </div>
    );
};

export default GetComment;
