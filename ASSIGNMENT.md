# Individual Assignment

Use the Showroom project as your starting point.

1. Create a personal access token for your Github user. Configure the Secret.js
   file (based on Secrets.example.js) with your personal access token.
2. Practice using curl to test API endpoints.
3. Consume appropriate Github API endpoints to properly display user's
   repositories. Keep in mind the principles we learned today - DRY (Do Not Repeat Yourself)
   and separation of concerns.

Linux and macOS should have curl installed on their machines by default.
If you have a windows OS you should be able to execute curl from Powershell.
If you cannot, will need to download and install curl for Windows from here:
[https://curl.se/windows/](https://curl.se/windows/). Powershell also has an
equivalent method called [Invoke-RestMethod](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-restmethod?view=powershell-7.1).

Guide how to create an personal access token on Github [https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)

API documentation for fetching user repositories:
[https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user)

Things to think about:
Where should the user repository fetching service live? which section of the code is responsible for it? Would you include it in the UserService or create a new object? Why?

Extra points:

- refactor the Presentation Layer by extracting UI components into separate React
  functional components. Make sure you aren't repeating code/logic.
- be creative, research the available Github API endpoints, come up with an
  idea how to improve the Showroom project by using one of Github APIs.
