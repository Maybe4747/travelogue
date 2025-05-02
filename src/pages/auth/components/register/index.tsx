import { Input, Button } from "antd";
import { useNavigate } from "react-router";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // 注册逻辑
    console.log("Registering:", username, password, confirm);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="w-full max-w-xs mx-auto">
        {/* 顶部tab切换 */}
        <div className="flex justify-center mb-8 mt-8 text-lg font-medium">
          <span
            className="text-gray-400 cursor-pointer mr-8"
            onClick={() => navigate("/login")}
          >
            登录
          </span>
          <span className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">
            注册
          </span>
        </div>
        {/* 表单 */}
        <div className="mb-4 font-bold text-base">账号/手机号</div>
        <Input
          className="mb-4 h-11 rounded"
          placeholder="邮箱 / 手机号"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input.Password
          className="mb-4 h-11 rounded"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input.Password
          className="mb-6 h-11 rounded"
          placeholder="确认密码"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <Button
          type="primary"
          className="w-full h-11 text-base rounded"
          onClick={handleRegister}
        >
          注 册
        </Button>
        <div className="flex justify-between mt-4 text-xs text-blue-500">
          <span className="cursor-pointer" onClick={() => navigate("/login")}>
            已有账号？去登录
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
