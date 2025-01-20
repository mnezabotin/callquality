import { Logo } from '@/components';
import { AppContextType, appContext } from '@/contexts';
import { Box, Flex } from '@/styles';
import { Input, Button, Form, Card } from 'antd'
import { useContext } from 'react';

type FieldType = {
  login?: string
  password?: string
};

export const Auth = (): JSX.Element => {
  const [form] = Form.useForm()

  const { setToken } = useContext(appContext) as AppContextType

  return (
    <>
      <Flex
        justifyContent='center'
        alignItems='center'
        w='100vw'
        h='100vh'
      >
        <Card style={{ width: 480 }}>
          <Box>
            <Logo />
          </Box>
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={(values) => {
              if (values.login === 'maxim' && values.password === '143') {
                const token = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)
                setToken(token)
              } else {
                form.setFields([
                  {
                    name: "login",
                    errors: ["Неверный логин"],
                  },
                  {
                    name: "password",
                    errors: ["Неверный пароль"],
                  },
                ]);
              }
            }}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Логин"
              name="login"
              rules={[{ required: true, message: 'Обязательное поле' }]}
            >
              <Input  placeholder='Введите логин' />
            </Form.Item>

            <Form.Item<FieldType>
              label="Пароль"
              name="password"
              rules={[{ required: true, message: 'Обязательное поле' }]}
            >
              <Input.Password placeholder='Введите пароль' />
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Войти
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Flex>
    </>
  )
}
