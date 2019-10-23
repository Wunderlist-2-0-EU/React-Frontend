// - Ability to edit a todo

// ```jsx
// <TodoForm onSubmit={/* Submit the edits */}>
//   <CompleteToggle onClick={/* Mark as complete/incomplete */}/>
//   <TodoInput O=Changeit/  Update the state  /<Gr
// up>
//     <Button type="submit">Save</Button>
//     <Button>Cancel onClick={/* Go back to todo */}</Button>
//   </Group>
// </TodoForm>
// ```

// - [Update the TodoForm] Ability to schedule and repeat items

// ```jsx
// <TodoForm onSubmit={/* Submit the edits */}>
//   <CompleteToggle onClick={/* Mark as complete/incomplete */}/>
//   <TodoInput onChange={/* Update the state */}/>

//   <Group>
//     <ActionButton onClick={/* Open the DatePopover */}>
//       <CalendarIcon />
//       <Text>Add due date</Text>
//     </ActionButton>

//     <DatePopover>
//       <Text>Due Date </Text>
//       <Input type="date" />
//     </DatePopover>

//     <ActionButton onClick={/* Open the SchedulePopover */}>
//       <RepeatIcon />
//       <Text>Repeat</Text>
//     </ActionButton>

//     <SchedulePopover>
//       <Text>Repeat</Text>
//       <Select>
//         <option value="daily">Daily</option>
//         <option value="weekly">Weekly</option>
//       </Select>
//     </SchedulePopover>
//   </Group>

//   <Group>
//     <Button type="submit">Save</Button>
//     <Button onClick={/* Go back to todo */}>Cancel</Button>
//   </Group>
// </TodoForm>
// ```

// - [Update the TodoForm] Ability to add notes to Todo

// ```jsx
// <TodoForm onSubmit={/* Submit the edits */}>
//   <CompleteToggle onClick={/* Mark as complete/incomplete */}/>
//   <TodoInput onChange={/* Update the state */}/>

//   <Group>
//     //The Textarea stores the note
//     <Textarea placeholder="add note here"/>

//     <ActionButton onClick={/* Open the DatePopover */}>
//       <CalendarIcon />
//       <Text>Add due date</Text>
//     </ActionButton>

//     <DatePopover>
//       <Text>Due Date </Text>
//       <Input type="date" />
//     </DatePopover>

//     <ActionButton onClick={/* Open the SchedulePopover */}>
//       <RepeatIcon />
//       <Text>Repeat</Text>
//     </ActionButton>

//     <SchedulePopover>
//       <Text>Repeat</Text>
//       <Select>
//         <option value="daily">Daily</option>
//         <option value="weekly">Weekly</option>
//       </Select>
//     </SchedulePopover>
//   </Group>

//   <Group>
//     <Button type="submit">Save</Button>
//     <Button onClick={/* Go back to todo */}>Cancel</Button>
//   </Group>
// </TodoForm>
// ```

import React from "react";
import { FormControl, FormLabel, Input, Button, Select } from "@chakra-ui/core";

export default function() {
  return (
    <FormControl>
      <FormLabel htmlFor="task">Task</FormLabel>
      <Input type="text" id="task" aria-describedby="task-description" />
      <FormLabel htmlFor="completed">Completed</FormLabel>
      <Input type="checkbox" id="completed" aria-describedby="completed" />
      <FormLabel htmlFor="due-date">Due</FormLabel>
      <Input type="date" id="due-date" aria-describedby="due-date" />
      <FormLabel htmlFor="repeat">Repeat</FormLabel>
      <Select id="repeat" placeholder="Select...">
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </Select>
      <Button>Save</Button>
      <Button>Cancel</Button>
    </FormControl>
  );
}
