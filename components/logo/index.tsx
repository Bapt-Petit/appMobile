import { Image } from "react-native";

function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./image/logo.png')}
      />
    );
  }