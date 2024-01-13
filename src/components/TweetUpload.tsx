import React, { useEffect, useState } from "react";
import { TweetEntity, TweetUploadProp } from "../types/tweet.type";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { createOne, updateOne } from "../services/tweet.service";
import { isEmpty, isValidEmail } from "../utils/validate.util";
import _ from 'lodash';

const DEFAULT_VALIDATOR_STATE = {
  name: {
    color: "gray",
    message: ""
  },
  email: {
    color: "gray",
    message: ""
  },
  body: {
    color: "gray",
    message: ""
  }
};

const TweetUploadForm: React.FC<TweetUploadProp> = ({
	tweet,
	index,
	id,
	classes,
	afterSubmit,
}) => {
	const [name, setName] = useState(tweet?.name);
	const [email, setEmail] = useState(tweet?.email);
	const [body, setBody] = useState(tweet?.body);
  const [canSubmit, setCanSubmitState] = useState(false);

  const [validators, setValidators] = useState(_.cloneDeep(DEFAULT_VALIDATOR_STATE));

  useEffect(() => {
    const emailValid = isValidEmail(email);
    const nameValid = !isEmpty(name);
    const bodyValid = !isEmpty(body);
    
    if (emailValid && nameValid && bodyValid) {
      setValidators(_.cloneDeep(DEFAULT_VALIDATOR_STATE));
      setCanSubmitState(true);
    } else {
      if (!emailValid) {
        validators.email = { color: "failure", message: "Invalid email address!" };
      }
      if (!nameValid) {
        validators.name = { color: "failure", message: "Name cannot be empty!" };
      }
      if (!bodyValid) {
        validators.body = { color: "failure", message: "Tweet cannot be empty!" };
      }
      setValidators(validators);
      setCanSubmitState(false);
    }
  }, [email, name, body]);

	const onSubmit = () => {
		if (email && body && name) {
			if (typeof id === "number") {
				//update tweet
				edit();
			} else {
				//create tweet
				create();
			}
		}
	};

	const create = async () => {
		if (name && email && body) {
			const payload: TweetEntity = {
				name,
				email,
				body,
			};
			createOne(payload)
				.then((response) => {
					//push to list
          console.log("RESPONSE DATA ", response.data)
          afterSubmit(null, response.data);
				})
				.catch((error) => {
					//setErrorState(error?.response?.data?.message);
				});
		}
	};

	const edit = async () => {
		if (name && email && body && typeof id === "number") {
			const payload: TweetEntity = {
				name,
				email,
				body,
			};
			updateOne(id, payload)
				.then((response) => {
					//set state for the edited tweet
          afterSubmit(index, response.data);
				})
				.catch((error) => {
					//setErrorState(error?.response?.data?.message);
				});
		}
	};

	return (
		<div className={`${classes} flex flex-col gap-4`}>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="email" value="Email" />
				</div>
				<TextInput
					id="email"
					type="text"
					sizing="sm"
					value={email}
					onChange={(event) => {
						setEmail(event.target.value);
					}}
          color={validators.email.color}
          helperText={
            <>
              <span>{validators.email.message}</span>
            </>
          }
				/>
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="name" value="Name" />
				</div>
				<TextInput
					id="name"
					type="text"
					sizing="md"
					value={name}
					onChange={(event) => {
						setName(event.target.value);
					}}
          color={validators.name.color}
          helperText={
            <>
              <span>{validators.name.message}</span>
            </>
          }
				/>
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="tweet" value="Tweet" />
				</div>
				<Textarea
					id="tweet"
					placeholder="Leave a tweet..."
					required
					rows={5}
					value={body}
					onChange={(event) => {
						setBody(event.target.value);
					}}
          color={validators.body.color}
          helperText={
            <>
              <span>{validators.body.message}</span>
            </>
          }
				/>
			</div>
			<div>
				<Button disabled={!canSubmit} size="md" onClick={() => onSubmit()}>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default TweetUploadForm;
