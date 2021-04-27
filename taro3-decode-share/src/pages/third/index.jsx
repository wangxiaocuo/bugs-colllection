import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  componentWillUnmount() {}

  componentDidShow() {
    // 1 没有问题
    // decodeURIComponent('')

    // 2 没有问题
    // const currQueryOpts = {}
    // decodeURIComponent(currQueryOpts.name || '')

    // 3 出问题了，onShareAppMessage不执行
    const currQueryOpts = Taro.getCurrentInstance().page.options;
    currQueryOpts.name = decodeURIComponent(currQueryOpts.name || "");
  }

  componentDidHide() {}

  onShareAppMessage() {
    const params = {
      title: "你好呀，宝贝儿",
      imageUrl: `https://photo.wm-motor.com/wm-intelligent-driving-miniapp/imgs/wm-official-activity-share-friends.png?v=${+new Date()}`
    };
    return params;
  }

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
      </View>
    );
  }
}
