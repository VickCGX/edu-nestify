import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './users/user.module'
import { PrismaModule } from '../prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { DepartmentModule } from './departments/department.module'
import { RoleModule } from './roles/role.module'
import { ModuleModule } from './modules/module.module'
import { SubjectModule } from './subjects/subject.module'
import { StudentModule } from './students/student.module'
import { TeacherModule } from './teachers/teacher.module'
import { ClassModule } from './classes/class.module'
import { QuestionTypeModule } from './quizzes/question-types/question-type.module'
import { QuizQuestionOptionModule } from './quizzes/quiz-question-options/quiz-question-option.module'
import { QuizQuestionModule } from './quizzes/quiz-question/quiz-question.module'
import { ScoreModule } from './scores/score.module'
import { AssignmentModule } from './assignments/assignment.module'
import { SubmissionModule } from './submissions/submission.module'
import { AnnouncementModule } from './announcements/announcement.module'
import { AttendanceModule } from './attendances/attendance.module'
import { TimetableModule } from './timetable/timetable.module'
import { NotificationModule } from './notifications/notification.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    UserModule,
    PrismaModule,
    AuthModule,
    DepartmentModule,
    RoleModule,
    ModuleModule,
    SubjectModule,
    StudentModule,
    TeacherModule,
    ClassModule,
    QuestionTypeModule,
    QuizQuestionOptionModule,
    QuizQuestionModule,
    ScoreModule,
    AssignmentModule,
    SubmissionModule,
    AnnouncementModule,
    AttendanceModule,
    TimetableModule,
    NotificationModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
