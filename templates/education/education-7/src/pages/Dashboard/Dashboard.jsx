/**
 * Dashboard — Authenticated student dashboard with stats, activity, and enrolled courses.
 */
import { dashboardStats, recentActivity, enrolledCourses } from '../../data/content';
import * as Icons from 'lucide-react';
import styles from './Dashboard.module.css';

const iconColorClass = { primary: styles.primary, accent: styles.accent, success: styles.success, info: styles.info };

const Dashboard = () => (
  <main id="main-content" className={styles.page}>
    <div className="container">
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.greeting}>Welcome back, Alex 👋</h1>
          <p className={styles.subGreeting}>Here's what's happening with your studies today.</p>
        </div>
        <p className={styles.dateStamp}>{new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
      </div>

      {/* Stats row */}
      <ul className={styles.statsGrid}>
        {dashboardStats.map(stat => {
          const Icon = Icons[stat.icon] || Icons.BookOpen;
          return (
            <li key={stat.id} className={[styles.statCard, iconColorClass[stat.color]].join(' ')}>
              <div className={styles.statIcon}><Icon size={22} /></div>
              <div>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.mainGrid}>
        {/* Enrolled courses */}
        <section className={styles.coursesSection} aria-label="Enrolled courses">
          <h2 className={styles.sectionTitle}>My Courses</h2>
          <ul className={styles.courseList}>
            {enrolledCourses.map(course => (
              <li key={course.id} className={styles.courseRow}>
                <div className={styles.courseInfo}>
                  <p className={styles.courseId}>{course.id}</p>
                  <p className={styles.courseName}>{course.title}</p>
                  <p className={styles.courseDue}>
                    <Icons.Clock size={12} aria-hidden="true" /> {course.nextDeadline}
                  </p>
                </div>
                <div className={styles.progressWrap}>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${course.progress}%` }}
                      role="progressbar"
                      aria-valuenow={course.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${course.progress}% complete`}
                    />
                  </div>
                  <span className={styles.progressPct}>{course.progress}%</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Recent activity */}
        <section className={styles.activitySection} aria-label="Recent activity">
          <h2 className={styles.sectionTitle}>Recent Activity</h2>
          <ul className={styles.activityList}>
            {recentActivity.map(item => {
              const iconMap = {
                submission: Icons.Upload,
                grade: Icons.Award,
                announcement: Icons.Bell,
                event: Icons.Calendar,
              };
              const ActivityIcon = iconMap[item.type] || Icons.Activity;
              return (
                <li key={item.id} className={styles.activityItem}>
                  <span className={styles.activityIcon}><ActivityIcon size={16} /></span>
                  <div>
                    <p className={styles.activityText}>{item.text}</p>
                    <p className={styles.activityTime}>{item.time}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  </main>
);

export default Dashboard;
