import styled from "styled-components";
import List from "../components/list/List";
import { Link } from "react-router-dom";

const RecipeList = () => {
  return (
    <div>
      <Wrapimg>
        <Title>
          <h1> Recipe Community</h1>
        </Title>
        <Nbutton>
          <Link to={`/board`}>
            <Newbutton>new Post</Newbutton>
          </Link>
        </Nbutton>

        <Card>
          <List
            title="Card Title"
            imageUrl="data:image/jpeg;base64,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"
            body="helooooooooooooo1111111111111111111111111111111111111111111111111111111111111111111111"
          />
          <List
            title="Card Title"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_G9U9095poYEIvtg8fnA2Ef3dcjLEebptQ&usqp=CAU"
            body="helooooooooooooo11111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11"
          />
          <List
            title="Card Title"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_G9U9095poYEIvtg8fnA2Ef3dcjLEebptQ&usqp=CAU"
            body="helooooooooooooo1111111111111111111111111111111111111111111111111111111111111111111111"
          />
          <List
            title="Card Title"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_G9U9095poYEIvtg8fnA2Ef3dcjLEebptQ&usqp=CAU"
            body="helooooooooooooo1111111111111111111111111111111111111111111111111111111111111111111111"
          />
        </Card>
      </Wrapimg>
    </div>
  );
};

const Title = styled.div`
  color: #056683;
  text-align: center;
`;
const Nbutton = styled.div`
  margin-bottom: -40px;
  text-align: right;
`;
const Newbutton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #3282bc;
  color: white;
  border: 0px;
  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(42, 52, 75, 0.658);
  font-weight: bold;
  &:hover {
    background: rgba(184, 217, 254, 0.366);
    transform: scale();
    cursor: pointer;
    color: #364d8f;
    font-weight: bold;
  }
`;
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const Wrapimg = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image:
   /* linear-gradient(
      rgba(252, 254, 255, 0.8),
      rgba(234, 240, 254, 0.8)
    ), */ url("https://cdn.discordapp.com/attachments/1047386886269829182/1051905388976550018/pngegg.png");
`;
export default RecipeList;
