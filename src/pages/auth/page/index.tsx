import React from 'react';
import { Button, Card, Form, type FormProps, Input, Layout, theme, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

// Тип для данных формы
type FieldType = {
  email?: string;
  password?: string;
};

const AuthPage: React.FC = () => {
  const { token } = theme.useToken();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    // Здесь будет логика входа
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${token.colorPrimaryBg} 0%, ${token.colorInfoBg} 100%)`
      }}>
      <Card>
        <div style={{ textAlign: 'center', marginBottom: token.marginLG }}>
          <Title level={2} style={{ margin: 0, color: token.colorPrimary }}>
            Вход в систему
          </Title>
        </div>

        <Form name="login" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Пожалуйста, введите email!' },
              { type: 'email', message: 'Введите корректный email!' }
            ]}>
            <Input prefix={<UserOutlined />} placeholder="Введите ваш email" size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Введите ваш пароль" size="large" />
          </Form.Item>

          <Form.Item style={{ marginTop: token.marginXL }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              style={{
                height: 44,
                fontSize: token.fontSizeLG
              }}>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
};
export default AuthPage;
