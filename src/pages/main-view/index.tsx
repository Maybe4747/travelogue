import { Button } from 'antd';
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import Header from '@/components/header';
const MainView: React.FC = () => {
  return (
    <>
    <div className="text-amber-200">MainView</div>
    <Button type="primary">Button</Button>

  <Space>
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
  </Space>
<Header />
    </>
  )
};

export default MainView;

