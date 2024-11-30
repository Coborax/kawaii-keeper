import type { StudyLog } from '@prisma/client'

import {
  studyLogs,
  studyLog,
  createStudyLog,
  updateStudyLog,
  deleteStudyLog,
} from './studyLogs'
import type { StandardScenario } from './studyLogs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('studyLogs', () => {
  scenario('returns all studyLogs', async (scenario: StandardScenario) => {
    const result = await studyLogs()

    expect(result.length).toEqual(Object.keys(scenario.studyLog).length)
  })

  scenario('returns a single studyLog', async (scenario: StandardScenario) => {
    const result = await studyLog({ id: scenario.studyLog.one.id })

    expect(result).toEqual(scenario.studyLog.one)
  })

  scenario('creates a studyLog', async (scenario: StandardScenario) => {
    const result = await createStudyLog({
      input: {
        id: 'String',
        userId: scenario.studyLog.two.userId,
        startTime: '2024-11-30T13:53:27.614Z',
        endTime: '2024-11-30T13:53:27.614Z',
        category: 'String',
        immersionType: 'String',
        immersionSource: 'String',
        updatedAt: '2024-11-30T13:53:27.614Z',
      },
    })

    expect(result.id).toEqual('String')
    expect(result.userId).toEqual(scenario.studyLog.two.userId)
    expect(result.startTime).toEqual(new Date('2024-11-30T13:53:27.614Z'))
    expect(result.endTime).toEqual(new Date('2024-11-30T13:53:27.614Z'))
    expect(result.category).toEqual('String')
    expect(result.immersionType).toEqual('String')
    expect(result.immersionSource).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2024-11-30T13:53:27.614Z'))
  })

  scenario('updates a studyLog', async (scenario: StandardScenario) => {
    const original = (await studyLog({
      id: scenario.studyLog.one.id,
    })) as StudyLog
    const result = await updateStudyLog({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a studyLog', async (scenario: StandardScenario) => {
    const original = (await deleteStudyLog({
      id: scenario.studyLog.one.id,
    })) as StudyLog
    const result = await studyLog({ id: original.id })

    expect(result).toEqual(null)
  })
})
