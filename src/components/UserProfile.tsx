interface UserProfileProps{
    name:string;
    isMember:boolean;
}
function UserProfile({name,isMember}:UserProfileProps){
    return <>{isMember === true ? <h1>Welcome,{name}</h1> : <h1>Guest</h1>}</>;
}

export default UserProfile