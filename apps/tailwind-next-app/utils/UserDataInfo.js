class UserDataInfo {
  constructor(data) {
    if (UserDataInfo.instance) {
      return UserDataInfo.instance;
    }
    this.data = data;
    UserDataInfo.instance = this;
  }

  async getUserDataInfo() {
    const res = await fetch(' https://randomuser.me/api/');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }
}

export default UserDataInfo;
