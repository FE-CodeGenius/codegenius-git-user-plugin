export interface BuiltInGitUserOptions {
  name?: string;
  email?: string;
  ruleName?: string;
  ruleEmail?: string;
}

export interface GitUserOptions {
  ruleName?: string;
  ruleEmail?: string;
}

export const gitUserOptions: BuiltInGitUserOptions = {
  name: "",
  email: "",
  ruleName: "[\\s\\S]*",
  ruleEmail:
    "^[a-zA-Z0-9._%+-]+@(163|qq|126|139|sina|sohu|yeah|gmail)\\.(com|net)$",
};
