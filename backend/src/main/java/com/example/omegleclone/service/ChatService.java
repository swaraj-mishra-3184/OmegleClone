package com.example.omegleclone.service;

import com.example.omegleclone.model.Message;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChatService {
    private final List<Message> messages = new ArrayList<>();

    public Message saveMessage(Message message) {
        messages.add(message);
        return message;
    }

    public List<Message> getMessages() {
        return messages;
    }
}
