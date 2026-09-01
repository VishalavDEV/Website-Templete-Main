package com.admin.dashboard.repository;

import com.admin.dashboard.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findByConversationIdOrderByTimestampAsc(String conversationId);

    @Query("SELECT DISTINCT m.conversationId FROM Message m WHERE m.sender.id = :userId OR m.receiver.id = :userId")
    List<String> findConversationIdsByUser(Long userId);

    Message findFirstByConversationIdOrderByTimestampDesc(String conversationId);
}
