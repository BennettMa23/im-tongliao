package com.tongliao.im.dao;

import com.tongliao.im.pojo.Friend;
import com.tongliao.im.pojo.User;

import java.util.List;
import java.util.Map;

public interface FriendDao {
    List<User> list(Long id);

    int add(Friend friend);
}
