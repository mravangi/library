const spaceTodash = (text) => {
    const txt = text ? text : '';
    return (((((txt.split("- ").join(" ")).split("- ").join(" ")).split(" - ").join(" ")).split("‎").join(" ")).split("‌").join(" ")).split(" ").join("-");
}
module.exports = spaceTodash;