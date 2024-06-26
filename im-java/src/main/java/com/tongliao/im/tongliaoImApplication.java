package com.tongliao.im;

import com.tongliao.im.netty.CoordinationNettyServer;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.tongliao.im.dao")
public class tongliaoImApplication  implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(tongliaoImApplication.class, args);
    }
    @Autowired
    private CoordinationNettyServer nettyServer;

    @Override
    public void run(String... args) throws Exception {
        nettyServer.start();
    }
}
