<template>
    <section class='Register'>
        <form @submit.prevent="handleRegister" class="auth-form">
            <div class="form-group">
                <input v-model="registerForm.mobile" type="tel" placeholder="请输入手机号"
                    :class="{ error: registerErrors.mobile }" />
                <span v-if="registerErrors.mobile" class="error-msg">{{ registerErrors.mobile }}</span>
            </div>
            <div class="form-group">
                <input v-model="registerForm.password" type="password" placeholder="设置密码（6-20位）"
                    :class="{ error: registerErrors.password }" />
                <span v-if="registerErrors.password" class="error-msg">{{ registerErrors.password }}</span>
            </div>
            <div class="form-group">
                <input v-model="registerForm.confirmPassword" type="password" placeholder="确认密码"
                    :class="{ error: registerErrors.confirmPassword }" />
                <span v-if="registerErrors.confirmPassword" class="error-msg">{{ registerErrors.confirmPassword
                    }}</span>
            </div>
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? '注册中...' : '注册' }}
            </button>
            <div class="switch-link">
                已有账号？
                <a href="javascript:void(0)" @click="toggleMode">去登录</a>
            </div>
        </form>
    </section>
</template>

<script setup lang='ts'>
import { userRegister } from '@/api/user';
import { defineComponent, ref, reactive } from 'vue';
const emit = defineEmits(['register', 'update:visible', 'login'])
const isSubmitting = ref(false);


// 注册表单
const registerForm = reactive({
    mobile: '15456780923',
    captcha: '',
    password: '1234@Abcd',
    confirmPassword: '1234@Abcd',
});
const registerErrors = reactive({
    mobile: '',
    captcha: '',
    password: '',
    confirmPassword: '',
});



// 切换模式
const toggleMode = () => {
    emit('login');
};



// 验证注册表单
const validateRegister = (): boolean => {
    let isValid = true;
    Object.keys(registerErrors).forEach(key => (registerErrors as any)[key] = '');

    if (!registerForm.mobile) {
        registerErrors.mobile = '手机号不能为空';
        isValid = false;
    } else if (!/^1[3-9]\d{9}$/.test(registerForm.mobile)) {
        registerErrors.mobile = '手机号格式错误';
        isValid = false;
    }

    if (!registerForm.password) {
        registerErrors.password = '密码不能为空';
        isValid = false;
    } else if (registerForm.password.length < 6 || registerForm.password.length > 20) {
        registerErrors.password = '密码长度6-20位';
        isValid = false;
    }

    if (registerForm.password !== registerForm.confirmPassword) {
        registerErrors.confirmPassword = '两次密码不一致';
        isValid = false;
    }

    return isValid;
};


const handleRegister = async () => {
    if (!validateRegister()) return;
    isSubmitting.value = true;
    try {
        const reqForm = {mobile: registerForm.mobile, password: registerForm.password}
        await userRegister(reqForm)
    } finally {
        isSubmitting.value = false;
    }
};

</script>
<style scoped lang='scss'>
.Register {
    width: 90%;
  max-width: 400px;
  background: white;
  border-radius: 16px;
  padding: 30px 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  z-index: 2;
    .auth-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .auth-container {
        background: white;
        border-radius: 16px;
        width: 90%;
        max-width: 400px;
        padding: 24px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        position: relative;
    }

    .auth-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;

        h2 {
            font-size: 20px;
            color: #333;
            margin: 0;
        }

        .close-btn {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #999;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;

            &:hover {
                background-color: #f5f5f5;
            }
        }
    }

    .auth-form {
        .form-group {
            margin-bottom: 16px;
            position: relative;

            input,
            .captcha-wrapper {
                width: 100%;
                height: 48px;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 0 16px;
                font-size: 16px;
                box-sizing: border-box;

                &.error {
                    border-color: #f44;
                }
            }

            .captcha-wrapper {
                display: flex;
                gap: 8px;

                input {
                    flex: 1;
                }

                .captcha-btn {
                    width: 110px;
                    background-color: #f44;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 14px;
                    cursor: pointer;
                    transition: background-color 0.2s;

                    &:disabled {
                        background-color: #ccc;
                        cursor: not-allowed;
                    }

                    &:not(:disabled):hover {
                        background-color: #e00;
                    }
                }
            }

            .error-msg {
                color: #f44;
                font-size: 12px;
                margin-top: 4px;
                display: block;
            }
        }

        .submit-btn {
            width: 100%;
            height: 48px;
            background: linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 16px;
            transition: background-color 0.2s;

            &:disabled {
                background-color: #ccc;
                cursor: not-allowed;
            }

            &:not(:disabled):hover {
                background-color: #e00;
            }
        }

        .switch-link {
            text-align: center;
            margin-top: 16px;
            font-size: 14px;
            color: #666;

            a {
                color: #f44;
                text-decoration: none;
                margin-left: 4px;
                cursor: pointer;
            }
        }
    }
}
</style>