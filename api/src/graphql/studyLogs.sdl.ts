export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    studyLogs: [StudyLog!]!
  }

  type StudyLog {
    id: String!
    userId: Int!
    user: User!
    startTime: DateTime!
    endTime: DateTime!
    category: String!
    immersionType: String!
    immersionSource: String!
  }

  type Query {
    studyLogs: [StudyLog!]! @requireAuth
    studyLogs(userId: Int!, startTime: DateTime!, endTime: DateTime!): [StudyLog!]! @requireAuth
    studyLog(id: Int!): StudyLog @requireAuth
  }

  input CreateStudyLogInput {
    userId: Int!
    startTime: DateTime!
    endTime: DateTime!
    category: String!
    immersionType: String!
    immersionSource: String!
  }

  input UpdateStudyLogInput {
    startTime: DateTime!
    endTime: DateTime!
    category: String!
    immersionType: String!
    immersionSource: String!
  }

  type Mutation {
    createStudyLog(input: CreateStudyLogInput!): StudyLog! @requireAuth
    updateStudyLog(id: Int!, input: UpdateStudyLogInput!): StudyLog!
      @requireAuth
    deleteStudyLog(id: Int!): StudyLog! @requireAuth
  }
`
