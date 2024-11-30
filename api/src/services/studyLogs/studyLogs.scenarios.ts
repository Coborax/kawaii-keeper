import type { Prisma, StudyLog } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StudyLogCreateArgs>({
  studyLog: {
    one: {
      data: {
        id: 'String',
        startTime: '2024-11-30T13:53:27.693Z',
        endTime: '2024-11-30T13:53:27.693Z',
        category: 'String',
        immersionType: 'String',
        immersionSource: 'String',
        updatedAt: '2024-11-30T13:53:27.693Z',
        user: {
          create: {
            email: 'String776048',
            username: 'String2709708',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-11-30T13:53:27.693Z',
          },
        },
      },
    },
    two: {
      data: {
        id: 'String',
        startTime: '2024-11-30T13:53:27.693Z',
        endTime: '2024-11-30T13:53:27.693Z',
        category: 'String',
        immersionType: 'String',
        immersionSource: 'String',
        updatedAt: '2024-11-30T13:53:27.693Z',
        user: {
          create: {
            email: 'String8815239',
            username: 'String149403',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-11-30T13:53:27.693Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<StudyLog, 'studyLog'>
