import React from "react";
import {
  Image,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { default as theme } from "../../../src/theme/theme.json"; // <-- Import app theme
import { ThemeContext } from "../../contexts/theme";

const { width, height } = Dimensions.get("window");

const COLORS = { black: "#101010" };

const slides = [
  {
    id: "1",
    image: require("../../images/image1.png"),
    title: "Sua renda é investida e protegida por nós",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    image: require("../../images/image2.png"),
    title: "Realize saques e depósitos em qualquer lugar",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    image: require("../../images/image3.png"),
    title: "Proteja o seu dinheiro",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={styles.containerSlide}>
      <Image
        source={item?.image}
        style={{ height: "50%", width, resizeMode: "contain" }}
      />
      <View>
        <Text category={"h5"} style={styles.title}>
          {item?.title}
        </Text>
        <Text category={"c2"} style={styles.subtitle}>
          {item?.subtitle}
        </Text>
      </View>
    </View>
  );
};

const WelcomeScreen = ({ navigation }: any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    const themeContext = React.useContext(ThemeContext);
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor:
                    themeContext.theme === "light"
                      ? theme["color-primary-500"]
                      : theme["color-basic-100"],
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text
                  style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 15 }}
                >
                  INICIAR
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    backgroundColor: "transparent",
                  },
                ]}
                onPress={skip}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  PULAR
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#FFFFFF",
                  }}
                >
                  PRÓXIMO
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <Layout style={{ flex: 1 }}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </Layout>
  );
};

const styles = StyleSheet.create({
  containerSlide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  subtitle: {
    marginTop: 10,
    textAlign: "center",
    lineHeight: 23,
    maxWidth: "90%",
  },
  title: {
    marginTop: 20,
    textAlign: "center",
    maxWidth: 300,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    color: "#FFFFFF",
    backgroundColor: "#202020",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default WelcomeScreen;
