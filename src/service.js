export const fetchUsers = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	return await response.json()
}

export const fetchPostsByUser = async (userId) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
	return await response.json()
}

export const fetchCommentsByPost = async (postId) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
	return await response.json()
}

export const fetchPost = async (postId) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
	return await response.json()
}

export const updatePost = async (body) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
		method: 'PATCH',
		body: JSON.stringify(body),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
	return await response.json()
}
