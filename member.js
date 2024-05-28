function skillsMember(members) {
    members.forEach(member => {
        console.log(`Member: ${member.name}`);
        console.log('Skills:');
        member.skills.forEach(skill => {
            console.log(skill);
        });
    });
}