import { StyleSheet, FlatList, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Travelogue } from "@/types/travelogue";

// 模拟数据
const mockTravelogues: Travelogue[] = [
  {
    id: "1",
    title: "杭州西湖游记",
    content: "西湖美景三月天...",
    images: ["https://example.com/image1.jpg"],
    location: "杭州",
    date: "2024-03-15",
    author: "张三",
    likes: 100,
    comments: [],
  },
  {
    id: "2",
    title: "北京故宫一日游",
    content: "故宫的宏伟令人震撼...",
    images: ["https://example.com/image2.jpg"],
    location: "北京",
    date: "2024-03-10",
    author: "李四",
    likes: 85,
    comments: [],
  },
];

export default function TravelogueScreen() {
  const backgroundColor = useThemeColor({}, "background");

  const renderItem = ({ item }: { item: Travelogue }) => (
    <View style={[styles.item, { backgroundColor }]}>
      <ThemedText type="title">{item.title}</ThemedText>
      <ThemedText>{item.content}</ThemedText>
      <ThemedText type="subtitle">地点: {item.location}</ThemedText>
      <ThemedText>作者: {item.author}</ThemedText>
      <ThemedText>日期: {item.date}</ThemedText>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        data={mockTravelogues}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
