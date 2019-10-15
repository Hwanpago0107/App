import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286F4"],
        title: "천둥 번개 주의!!!",
        subtitle: "외출을 삼가하세요"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "부슬부슬 가랑비",
        subtitle: "가랑비에 옷이 젖을 수도 있어요"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "하늘에서 비가 주륵주륵",
        subtitle: "우산 꼭 챙기세요"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "함박눈이 펑펑 내려요",
        subtitle: "손이 꽁꽁꽁, 발이 꽁꽁꽁"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "대기가 불안정해요",
        subtitle: "외출할 때 주의하세요"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "화창한 날씨입니다",
        subtitle: "소풍가기 딱 좋은 날씨예요"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "흐린 날씨...",
        subtitle: "우울해도 힘내요"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "안개가 자욱한 날이에요",
        subtitle: "주행 시 전방 주의!"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "옅은 안개",
        subtitle: "안개 조심"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "미세먼지 주의!!!",
        subtitle: "마스크 꼭 잊지마세요"
    }
};

export default function Weather({ temp, condition, name }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={100}
                    name={weatherOptions[condition].iconName}
                    color="white" />
                <Text style={styles.temp}>{temp}<Text style={styles.celsius}>℃</Text></Text>
                <Text style={styles.location}>{name}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle }>{weatherOptions[condition].subtitle}</Text>
                </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atomsphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    celsius: {
        fontSize: 25,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center"
    },
    location: {
        color: "white"
    }
});