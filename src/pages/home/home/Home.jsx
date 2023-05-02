import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Hamburger from "../../../components/Hamburger";
import Heading1 from "../../../components/Heading1";
import LoginForm from "../../../components/LoginForm";
import P from "../../../components/P";


const Home = () => {
    return (
        <div>
            <Container bgColor={"bg-slate-200"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt optio voluptatem? Excepturi sed a adipisci! Debitis quae odio ullam nisi aut ratione, eveniet cum omnis? Consequuntur quo id neque eius aspernatur dolorem eligendi. Reprehenderit odit, delectus temporibus molestiae dicta vel dolor explicabo fugit aut quae facilis ad in. Expedita!
                <P>This is a paragraph</P>
                <Heading1>This is a heading 1</Heading1>
                {/* <Button
                    bgColor={"bg-red-500"}
                    bgHover={"bg-slate-600"}>
                    Buttooooooooooon
                </Button> */}
            </Container>
            <Container>

            </Container>
            <Button bgHover={"bg-red-600"} bgColor={"bg-red-200"}
            >
                Buttooooooooooon
            </Button>
            <Hamburger></Hamburger>
            <Heading1>This is heading</Heading1>
            <LoginForm></LoginForm>
        </div>
    );
};

export default Home;