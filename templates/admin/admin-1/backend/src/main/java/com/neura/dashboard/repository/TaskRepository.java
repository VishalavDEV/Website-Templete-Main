package com.neura.dashboard.repository;

import com.neura.dashboard.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
