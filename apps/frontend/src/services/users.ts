export async function getPendingUsersForChapter(chapter: string) {
  // TODO: Implement with your backend
  const response = await fetch(`/api/users/pending?chapter=${chapter}`);
  if (!response.ok) {
    throw new Error('Failed to fetch pending users');
  }
  return response.json();
}

export async function getUserProfile(userId: string) {
  // TODO: Implement with your backend
  const response = await fetch(`/api/users/${userId}`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  return response.json();
}

export async function isUserLeader(userId: string) {
  // TODO: Implement with your backend
  const response = await fetch(`/api/users/${userId}/role`);
  if (!response.ok) {
    return false;
  }
  const data = await response.json();
  return data.role === 'leader' || data.role === 'council_leader';
}