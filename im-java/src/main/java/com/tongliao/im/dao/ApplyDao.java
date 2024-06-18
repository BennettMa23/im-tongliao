package com.tongliao.im.dao;

import com.tongliao.im.pojo.Apply;
import com.tongliao.im.pojo.User;

import java.util.List;

public interface ApplyDao {
    int add(Apply apply);

    List<User> getFriends(Long id);
}
