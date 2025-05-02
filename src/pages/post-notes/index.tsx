import Header from "../../components/header";
import { Upload, Input, Tag, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const categories = [
  { label: "机遇", value: 1 },
  { label: "发现", value: 2 },
  { label: "标签", value: 4 },
];

const PostNotes = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const handleCategoryChange = (value: number) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto p-4 pt-10 bg-white min-h-screen flex flex-col">
        {/* 图片上传 */}
        <div className="mb-4">
          <Upload
            listType="picture-card"
            showUploadList={false}
            className="w-full flex justify-center"
          >
            <div className="w-full h-32 flex flex-col items-center justify-center bg-gray-100 border border-dashed rounded">
              <PlusOutlined className="text-3xl text-gray-400 mb-2" />
              <div className="text-gray-400 text-sm">上传图片</div>
            </div>
          </Upload>
        </div>
        {/* 标题 */}
        <div className="mb-3">
          <div className="text-gray-500 text-sm mb-1">标题</div>
          <Input placeholder="请输入标题" className="h-10" />
        </div>
        {/* 位置 */}
        <div className="mb-3">
          <div className="text-gray-500 text-sm mb-1">位置</div>
          <Input placeholder="请输入位置" className="h-10" />
        </div>
        {/* 分类 */}
        <div className="mb-3">
          <div className="text-gray-500 text-sm mb-1">分类</div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <Tag.CheckableTag
                key={cat.value}
                checked={selectedCategories.includes(cat.value)}
                onChange={() => handleCategoryChange(cat.value)}
                className="px-3 py-1 rounded border border-gray-200"
              >
                {cat.label} {cat.value}
              </Tag.CheckableTag>
            ))}
          </div>
        </div>
        {/* 正文 */}
        <div className="mb-4">
          <div className="text-gray-500 text-sm mb-1">正文</div>
          <Input.TextArea rows={3} placeholder="正文" className="resize-none" />
        </div>
        {/* 提交按钮 */}
        <Button
          type="primary"
          className="w-full h-11 text-base mt-2 rounded"
          size="large"
        >
          发布
        </Button>
      </div>
    </>
  );
};

export default PostNotes;
