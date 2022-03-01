const mongoose = require("mongoose");

const VotePostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    proposition: {
      type: String,
    },
    upvotes: {
      type: Array,
      default: [],
    },
	downvotes: {
		type: Array.
		default: []
	}
  },
  { timestamps: true }
);

module.exports = mongoose.model("VotePost", VotePostSchema);
