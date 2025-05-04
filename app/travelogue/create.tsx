import { useState } from "react";
import { StyleSheet, View, TextInput, Button, ScrollView } from "react-native";
import { router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function CreateTravelogueScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const backgroundColor = useThemeColor({}, "background");

  const handleSubmit = () => {
    // TODO: 实现提交逻辑
    console.log({ title, content, location });
    router.back();
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      <View style={styles.form}>
        <ThemedText type="title">发布游记</ThemedText>

        <View style={styles.inputGroup}>
          <ThemedText>标题</ThemedText>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="请输入标题"
          />
        </View>

        <View style={styles.inputGroup}>
          <ThemedText>地点</ThemedText>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            placeholder="请输入地点"
          />
        </View>

        <View style={styles.inputGroup}>
          <ThemedText>内容</ThemedText>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={content}
            onChangeText={setContent}
            placeholder="请输入游记内容"
            multiline
            numberOfLines={10}
          />
        </View>

        <Button title="发布" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 16,
  },
  inputGroup: {
    marginVertical: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  textArea: {
    height: 200,
    textAlignVertical: "top",
  },
});
