// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  studyLogs: [
    {
      __typename: 'StudyLog' as const,
      id: '42',
    },
    {
      __typename: 'StudyLog' as const,
      id: '43',
    },
    {
      __typename: 'StudyLog' as const,
      id: '44',
    },
  ],
})
