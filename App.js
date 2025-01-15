import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const tasks = [
  {
    id: "1",
    title: "Hoàn thành báo cáo doanh thu",
    description: "Báo cáo doanh thu cần hoàn thành trước 12/01/2025, 10:00.",
    date: "15/01/2025, 08:00",
    icon: "file-text",
  },
  {
    id: "2",
    title: "Cuộc họp khách hàng mới",
    description: "Chuẩn bị tài liệu và tham dự cuộc họp với khách hàng lúc 15:00.",
    date: "15/01/2025, 07:00",
    icon: "users",
  },
  {
    id: "3",
    title: "Gửi email xác nhận hợp đồng",
    description: "Hãy gửi email xác nhận các điều khoản hợp đồng trước 17:00.",
    date: "15/01/2025, 06:00",
    icon: "envelope",
  },
  {
    id: "4",
    title: "Đánh giá hiệu suất tháng",
    description: "Đánh giá hiệu suất của nhân viên và gửi báo cáo vào cuối ngày.",
    date: "15/01/2025, 05:00",
    icon: "check-circle",
  },
  {
    id: "5",
    title: "Kiểm tra tồn kho cuối năm",
    description: "Thực hiện kiểm tra số liệu tồn kho cuối năm, hạn trước ngày 20/01/2025.",
    date: "15/01/2025, 04:00",
    icon: "archive",
  },
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <View style={styles.iconContainer}>
        <FontAwesome name={item.icon} size={24} color="#4CAF50" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Danh sách công việc</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  taskItem: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 12,
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
});
