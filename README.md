# Zuddl Assignment Questions - 

### How would your tables and apis change for the following scenarios. What tables and api endpoints would you add? Which tables and api endpoints would need to be updated?

## Q1 If a user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed
- Table needed : Stage (`userId`,`stageType`,`allTasks`,`stagesOrder`) -> We need to add a stages property to each board to store the customized stage order and names.
- We have to create an API endpoint that fetch and update the stages for a specific board.
- The endpoint should support adding, editing, and deleting stages.

## Q2 If users can comment on tasks
- We have to add a comments property to each task to store comments associated with that task.
- We can either add all everybody to comment or only the assigned user, depending on the use case
- API's needed
- We have to create API endpoints (/addcomment) to fetch, add, edit, and delete comments for a specific task.
- The endpoints should support CRUD (Create, Read, Update, Delete) operations for comments.
- - We can add middleware to check for assignedUser or not and also do validation for same on frontend.

## Q3 How will you do error handling
- Adding error handling logic in your Redux actions and reducers.
- Displaying error messages to the user when API requests fail.
- Logging errors on the client-side and potentially sending error reports to a server for debugging.
- Implementing retry mechanisms for failed API requests.
- Providing informative error messages to help users understand what went wrong.