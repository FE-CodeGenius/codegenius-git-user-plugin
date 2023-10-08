# @codegenius/git-user-plugin

设置或校验 `git user` 信息是否规范, 支持命令模式和 **API** 模式;

使用场景: 用于校验那些不应该出现的邮箱地址会名称出现在 `git` 提交记录中, 常见的使用公司内部邮箱提交 `github` 的开源项目, 这通常是不允许的.

### 命令模式

```bash
# 在默认规则下设置 email 信息
codeg gituser -e zxin088@gmail.com

# 在指定规则下设置 email 信息
codeg gituser -e zxin088@qq.com --rule-email '^[a-zA-Z0-9._%+-]+@(qq)\.(com)$'
```

```bash
# 在默认规则下校验 user 和 email 信息
codeg gituser

# 在指定规则下校验 user 和 email 信息
codeg gituser --rule-email '^[a-zA-Z0-9._%+-]+@(qq)\.(com)$'
```

| 选项                    | 描述                                 |
| ----------------------- | ------------------------------------ |
| -n, --name \<name\>     | 设置 user.name                       |
| -e, --email \<email\>   | 设置 user.email                      |
| --rule-name \<regexp\>  | 设置 user.name 匹配规则(转义字符串)  |
| --rule-email \<regexp\> | 设置 user.email 匹配规则(转义字符串) |

- **--rule-name 默认 :** `[\s\S]*`
- **--rule-email 默认 :** `^[a-zA-Z0-9._%+-]+@(163|qq|126|139|sina|sohu|yeah|gmail)\.(com|net)$`

### API 模式

```typescript
import { setGitUserName, setGitUserEmail, checkGitUserInfo } from "code-genius";

(async () => {
  await setGitUserName("OSpoon", "[\\s\\S]*");
  await setGitUserEmail(
    "zxin088@gmail.com",
    "^[a-zA-Z0-9._%+-]+@(gmail)\\.(com)$"
  );
  await checkGitUserInfo("[\\s\\S]*", "^[a-zA-Z0-9._%+-]+@(gmail)\\.(com)$");
})();
```

### 配置文件

```typescript
# 覆盖默认的 `gituser` 配置
import { defineConfig } from "code-genius";

export default defineConfig({
  commands: {
    gituser: {
      ruleEmail: "^[a-zA-Z0-9._%+-]+@(gmail)\\.(com)$",
    },
  },
});
```
