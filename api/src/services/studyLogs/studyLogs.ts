import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

export const studyLogs: QueryResolvers['studyLogs'] = () => {
  return db.studyLog.findMany()
}

export const studyLogsByUIDAndStandAndEndTime: QueryResolvers['studyLogs'] = ({
  userId,
  startTime,
  endTime,
}) => {
  return db.studyLog.findMany({
    where: {
      userId,
      startTime: {
        gte: startTime,
        lte: endTime,
      },
      endTime: {
        lte: endTime,
        gte: startTime,
      },
    },
  })
}

export const studyLog: QueryResolvers['studyLog'] = ({ id }) => {
  return db.studyLog.findUnique({
    where: { id },
  })
}

export const createStudyLog: MutationResolvers['createStudyLog'] = ({
  input,
}) => {
  return db.studyLog.create({
    data: input,
  })
}

export const updateStudyLog: MutationResolvers['updateStudyLog'] = ({
  id,
  input,
}) => {
  return db.studyLog.update({
    data: input,
    where: { id },
  })
}

export const deleteStudyLog: MutationResolvers['deleteStudyLog'] = ({ id }) => {
  return db.studyLog.delete({
    where: { id },
  })
}

export const StudyLog: StudyLogRelationResolvers = {
  user: (_obj, { root }) => {
    return db.studyLog.findUnique({ where: { id: root?.id } }).user()
  },
}
