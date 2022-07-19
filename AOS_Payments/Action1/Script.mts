AIUtil.SetContext Browser("creationtime:=2")
AIUtil("profile").Click
AIUtil("input", "Username").Type "gshepherd"
AIUtil("input", "Password").Type "Password1"
AIUtil("button", "SIGN IN").Click
