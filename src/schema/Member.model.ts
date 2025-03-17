import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from "../lips/enums/member.enum";

const memberSchema = new Schema({
  membertype: {
    type: String,
    enum: MemberType,
    default: MemberType.USER
  },

  memberStatus: {
    type: String,
    enum: MemberStatus,
    default: MemberStatus.ACTIVE
  },

  memberNick: {
    type: String,
    index: { unique: true, sparse: true },
    required: true
  },

  memberPhone: {
    type: String,
    index: { unique: true, sparse: true },
    required: true
  },

  memberPassword: {
    type: String,
    select: false,
    required: true
  },

  memberAddress: {
    type: String
  },

  memberDesc: {
    type: String
  },

  memberImages: {
    type: String
  },

  memberPoints: {
    type: Number,
    default: 0
  },

}, {timestamps: true}); // updatedAT, createdAT
export default mongoose.model("Member", memberSchema);