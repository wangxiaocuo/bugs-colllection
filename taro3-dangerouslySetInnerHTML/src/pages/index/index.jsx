import { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <View
          dangerouslySetInnerHTML={{
            __html: `<div>你好啊，靓仔！</div>`,
          }}
        ></View>
        <View
          dangerouslySetInnerHTML={{
            __html: `<video src="https://photo.wm-motor.com/recommend_drive_img/prod/1619600124882_%E9%80%A0%E8%BD%A6%E8%89%BA%E6%9C%AF.mp4" controls="controls" style="width: 100%;"></video>`,
          }}
        ></View>
      </View>
    );
  }
}
