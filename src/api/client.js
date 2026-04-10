export const fetchTaskById = async(id) => {
    try{
    const response = await fetch(`/api/tasks/${id}`);
    if (!response.ok) {
        throw new Error('Task not found');
    }
    return await response.json();
    } catch (error) {
        console.error('Error fetching task:', error);
        throw error;
    }   
};