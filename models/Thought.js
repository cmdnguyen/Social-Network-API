const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Schema to create Though model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: function (date) {
        const options = {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true, // Use 12-hour format with AM/PM
        };
        return date.toLocaleString(undefined, options);
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
